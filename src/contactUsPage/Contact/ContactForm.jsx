import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "/src/data/contactUs/ContactForm.json";
import { Send } from "lucide-react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const DRAFT_KEY = "contactFormDraft";

function ContactForm() {
  const navigate = useNavigate();

  const [projectType, setProjectType] = useState([]);
  const [projectTime, setProjectTime] = useState([]);
  const [budget, setBudget] = useState([]);

  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setProjectType(data.projectTypes || []);
      setProjectTime(data.projectTime || []);
      setBudget(data.budget || []);
    }
  }, []);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setForm((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.warn("Failed to parse draft from localStorage", e);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
    } catch (e) {
      console.warn("Failed to save draft to localStorage", e);
    }
  }, [form]);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setLoading(true);
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
      } catch {}
      navigate("/signin");
      setTimeout(() => setLoading(false), 300);
      return;
    }
    try {
      setLoading(true);

      localStorage.removeItem(DRAFT_KEY);

      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        timeline: "",
        budget: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const typeComponent = projectType.map((type, index) => {
    return (
      <option value={type.value} key={index}>
        {type.name}
      </option>
    );
  });

  const timeComponent = projectTime.map((time, index) => {
    return (
      <option value={time.value} key={index}>
        {time.name}
      </option>
    );
  });

  const budgetComponent = budget.map((budgetElement, index) => {
    return (
      <option value={budgetElement.value} key={index}>
        {budgetElement.name}
      </option>
    );
  });

  return (
    <div className="contact-form">
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "hsl(var(--foreground))",
        }}
      >
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            required
            value={form.name}
            onChange={onChange}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            required
            value={form.email}
            onChange={onChange}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            value={form.phone}
            onChange={onChange}
            disabled={loading}
          />
        </div>

        <div className="form-groupa">
          <label className="form-label" htmlFor="projectType">
            Project Type *
          </label>
          <select
            id="projectType"
            className="form-select"
            required
            value={form.projectType}
            onChange={onChange}
            disabled={loading}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {typeComponent}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="timeline">
            Project Timeline
          </label>
          <select
            id="timeline"
            className="form-select"
            value={form.timeline}
            onChange={onChange}
            disabled={loading}
          >
            <option value="">Select a timeline</option>
            {timeComponent}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="budget">
            Budget Range
          </label>
          <select
            id="budget"
            className="form-select"
            value={form.budget}
            onChange={onChange}
            disabled={loading}
          >
            <option value="">Select a budget</option>
            {budgetComponent}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Project Details *
          </label>
          <textarea
            id="message"
            className="form-textarea"
            placeholder="Please describe your project requirements, goals, and any specific technologies or features you need..."
            required
            value={form.message}
            onChange={onChange}
            disabled={loading}
          />
        </div>

        <button type="submit" className="form-button" disabled={loading}>
          {loading
            ? user
              ? "Sending..."
              : "Redirecting to Signin..."
            : "Send Message"}
          <Send
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "8px",
            }}
          />
        </button>

        {!user && (
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.9rem",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            Note: An account is required to submit. Progress is saved automatically.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;

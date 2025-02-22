import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--background-primary);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 5px;
  text-align: left;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
//   background: var(--background-secondary);
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:focus {
    // outline: none;
    border-color: var(--accent-primary);
    background: var(--background-light);
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 2px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
//   background: var(--background-secondary);
//   color: var(--text-primary);
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    // background: var(--background-light);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: var(--accent-secondary);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: var(--accent-primary);
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ success }) => (success ? "var(--success-color)" : "var(--error-color)")};
`;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        subscribe: false,
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            if (formData.subscribe) {
                const response = await fetch("https://your-firebase-url.com/add-contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                    }),
                });

                if (!response.ok) throw new Error("Failed to add contact");

                setStatus("Contact added successfully!");
            }

            setFormData({ firstName: "", lastName: "", email: "", message: "", subscribe: false });
        } catch (error) {
            console.error("Error:", error);
            setStatus("Error submitting form");
        }
    };

    return (
        <FormContainer>
            <Title>Contact Me</Title>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Message</Label>
                    <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                    />
                </FormGroup>

                <CheckboxContainer>
                    <Checkbox
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                    />
                    <Label>Subscribe to newsletter</Label>
                </CheckboxContainer>

                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>

            {status && <StatusMessage success={status.includes("success")}>{status}</StatusMessage>}
        </FormContainer>
    );
};

export default ContactForm;

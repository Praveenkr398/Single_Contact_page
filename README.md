React Context API Kya Hai? | React Context API Full Guide in Hindi

React में जब हम props drilling की समस्या से बचना चाहते हैं, तो Context API का उपयोग किया जाता है। इस ब्लॉग में हम React Context API को डिटेल में समझेंगे और तीन प्रोजेक्ट्स के साथ इसे इम्प्लीमेंट करेंगे।

React Context API Kya Hai? | React Context API Full Guide in Hindi



🔹 React Context API Kya Hai?
React Context API एक state management tool है जो हमें props drilling से बचने में मदद करता है। जब हमें किसी डेटा को कई nested components तक पास करना होता है, तो हर बार props को manually पास करना मुश्किल होता है। Context API इस समस्या को हल करने में मदद करता है।

🔸 Props Drilling Problem:
जब हम React में props को parent से child, फिर उसके आगे nested components में पास करते हैं, तो इसे props drilling कहते हैं। Context API इस props drilling से बचने का आसान तरीका प्रदान करता है।

🔹 React Context API Kaise Kaam Karta Hai?
Context API तीन मुख्य steps में काम करता है:

1️⃣ Context Create करना – createContext() का उपयोग करके।
2️⃣ Context Provide करना – Provider के माध्यम से।
3️⃣ Context Use करना – useContext() Hook की मदद से।

🚀 Example Code - Context API Implementation
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Context Create करें
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 2️⃣ Context को Use करें
const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

// 3️⃣ Final App
const App = () => {
    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    );
};

export default App;
🔹 3 Projects Using React Context API
अब हम React Context API को इस्तेमाल करके तीन शानदार प्रोजेक्ट बनाएंगे।

1️⃣ Theme Switcher (Light/Dark Mode)
इस प्रोजेक्ट में एक बटन होगा जिससे यूजर लाइट और डार्क थीम के बीच स्विच कर सकेगा।

💡 Features:
✔ React Context API का उपयोग
✔ useState() और useContext() का प्रयोग
✔ CSS के द्वारा थीम बदलना

🔹 Code Implementation:
ऊपर दिया गया Theme Switcher Code इस प्रोजेक्ट का बेस है।

2️⃣ Login Page (Authentication Context)
इस प्रोजेक्ट में हम एक लॉगिन पेज बनाएंगे, जहाँ यूजर लॉगिन करेगा और फिर एक Welcome Page दिखेगा।

💡 Features:
✔ React Context API से लॉगिन डेटा मैनेज करना
✔ useState() और useContext() का प्रयोग
✔ Conditional Rendering

🔹 Code Implementation:

import React, { createContext, useContext, useState } from "react";

// Context Create करें
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser(username);
    };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

// Login Component
const LoginPage = () => {
    const { user, login } = useContext(AuthContext);
    const [username, setUsername] = useState("");

    return user ? (
        <h2>Welcome, {user}!</h2>
    ) : (
        <div>
            <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => login(username)}>Login</button>
        </div>
    );
};

// Final App
const App = () => {
    return (
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    );
};

export default App;
3️⃣ Contact Us Page (Form Data Handling with Context API)
इस प्रोजेक्ट में एक Contact Us Form होगा, जहाँ यूजर नाम, सब्जेक्ट और मैसेज भरकर सबमिट करेगा। सबमिट करने के बाद, उसका डेटा Message Box Page पर दिखेगा।

💡 Features:
✔ Context API के माध्यम से Form Data Handle करना
✔ useState() और useContext() का उपयोग
✔ Contact Us Form Validation

🔹 Code Implementation:

import React, { createContext, useContext, useState } from "react";

// Context Create करें
const ContactContext = createContext();

const ContactProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <ContactContext.Provider value={{ messages, addMessage }}>
            {children}
        </ContactContext.Provider>
    );
};

// Contact Form Component
const ContactForm = () => {
    const { addMessage } = useContext(ContactContext);
    const [formData, setFormData] = useState({ fullName: "", subject: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage(formData);
        setFormData({ fullName: "", subject: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
            <input type="text" placeholder="Subject" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
            <textarea placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

// Message Display Component
const MessageBox = () => {
    const { messages } = useContext(ContactContext);
    return (
        <div>
            <h2>Messages Received:</h2>
            {messages.map((msg, index) => (
                <p key={index}>{msg.fullName}: {msg.message}</p>
            ))}
        </div>
    );
};

// Final App
const App = () => {
    return (
        <ContactProvider>
            <ContactForm />
            <MessageBox />
        </ContactProvider>
    );
};

export default App;
🔹 Conclusion
React Context API एक पावरफुल फीचर है जो props drilling की समस्या से बचाता है और state management को आसान बनाता है। हमने तीन प्रोजेक्ट्स के साथ इसे अच्छे से समझा।

👉 अब आप अपने प्रोजेक्ट्स में Context API को यूज़ करके React की समझ को और गहरा बना सकते हैं! 🚀




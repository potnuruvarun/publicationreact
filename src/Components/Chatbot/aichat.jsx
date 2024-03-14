// import React, { useState, useEffect } from "react";
// import OpenAIApi, { Configuration } from "openai"; // Importing Configuration from "openai" package

// const openai = new OpenAIApi({ apiKey: "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", dangerouslyAllowBrowser: true }); // No need to pass configuration here, it can be set separately

// function GPT() {
//     const [message, setMessage] = useState("");
//     const [chats, setChats] = useState([]);
//     const [isTyping, setIsTyping] = useState(false);

//     useEffect(() => {
//         // Initialize OpenAI with configuration
//         const configuration = new Configuration({
//             apiKey: "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",
//         });
//         openai.configuration = configuration;
//     }, []);

//     const chat = async (e, message) => {
//         e.preventDefault();
//         if (!message) return;
//         setIsTyping(true);

//         let msgs = [...chats];
//         msgs.push({ role: "user", content: message });
//         setChats(msgs);
//         setMessage("");
//     };

//     const handleGPTResponse = (res) => {
//         let msgs = [...chats];
//         msgs.push(res.data.choices[0].message);
//         setChats(msgs);
//         setIsTyping(false);
//     };

//     openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [
//             {
//                 role: "system",
//                 content:
//                     "You are a EbereGPT. You can help with graphic design tasks",
//             },
//             ...chats,
//         ],
//     })
//     .then(handleGPTResponse)
//     .catch((error) => {
//         console.log(error);
//     });

//     return (
//         <main>
//             <h1>Chat Ai </h1>
//             <div className={isTyping ? "" : "hide"}>
//                 <p>
//                     <i>{isTyping ? "Typing" : ""}</i>
//                 </p>
//             </div>
//             <form onSubmit={(e) => chat(e, message)}>
//                 <input
//                     type="text"
//                     name="message"
//                     value={message}
//                     placeholder="Type a message here and hit Enter..."
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//             </form>
//         </main>
//     );
// }

// export default GPT;

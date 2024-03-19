// import useChatMessages from "../Chatbot/useChatMessages";
// import Chatbot from "react-chatbot-kit";

// const ChatbotComponent = () => {
//   const { messages } = useChatMessages();
//   // const handleUserMessage=(message)=>{
//   //     addMessage({text: message, user: true})
//   // }

//   const config = {
//     inputplaceholder: "Type a Message",
//   };
//   const actionProvider = "";
//   const messageParser = "";

//   return (
//     <div>
//       <Chatbot
//         config={config}
//         actionProvider={actionProvider}
//         messageParser={messageParser}
//       />
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>{message.text}</div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default ChatbotComponent;
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from "react-bootstrap";

const steps = [
  {
    id: "0",
    message: "Hey user!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "complient",  trigger:"6", },
    ],
  
  },
  {
    id: "6",
    message: "You can give compline here:",
    trigger: "compline_button"
  },
  {
    id: "compline_button",
    component: (
      <button onClick={() => window.open('http://localhost:3000/contactus', '_blank')}>
        complient here
      </button>
    ),
    trigger:"7",
    end: true
  },
  {
    id: "7",
    message:"Thank You",
  },
  
];

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  floating: true,
};

function ChatbotComponent() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Chatbot
          // This appears as the header
          // text for the chat bot
          headerTitle="GeekBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default ChatbotComponent;

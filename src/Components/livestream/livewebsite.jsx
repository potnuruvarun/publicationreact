// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const WebsiteComponent = () => {
//     const [websiteContent, setWebsiteContent] = useState('');
//         useEffect(() => {
//         const fetchWebsiteContent = async () => {
//             try {
//                 const response = await axios.get('https://cors-anywhere.herokuapp.com/https://in.linkedin.com/');
//                 console.log(response);
//                 setWebsiteContent(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchWebsiteContent();
//     }, []);
//     return (
//         <div dangerouslySetInnerHTML={{ __html: websiteContent }} />
//     );
// }
// export default WebsiteComponent;

import React from 'react';

const WebsiteComponent = () => {
  return (
    <div>
      <iframe width="560" height="315"  src="https://www.youtube.com/embed/rC644qOZUro" frameborder="0" allowfullscreen></iframe>
    </div>
  );
}

export default WebsiteComponent;
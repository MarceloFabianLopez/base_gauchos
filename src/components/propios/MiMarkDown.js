import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


const input = `<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>`;
const  MiMarkDown = () =>{
    




 
        return (<ReactMarkdown 
            rehypePlugins={[rehypeRaw]} 
            children={input} />, 
            document.body);
    

}
export default MiMarkDown;
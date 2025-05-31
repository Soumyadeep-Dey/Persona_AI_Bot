import React, {useState, useRef, useEffect} from "react";

const PromptInput = ({ onSend, loading}) => {
    const [prompt, setPrompt] = useState("");
    const textareaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim() && !loading){
            onSend(prompt);
            setPrompt("");
        }
    }

       const handleKeyDown = (e) => {
       if(e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    // Auto-resize textarea

    useEffect(() =>{
       if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [prompt]);

    return (
        <form
           onSubmit={handleSubmit}
           className="flex gap-2.5 items-start border-t pt-5"
        >
            <div className="flex-2 relative">
                <input
                   ref={textareaRef}
                   value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}
                   onKeyDown={handleKeyDown}
                   className="w-full overflow-hidden p-4 pr-15 border border-gray-400 rounded-lg resize-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                   placeholder="Ask your question in Hinglish"
                   rows={1}
                   disabled={loading}>
                </input>
                {prompt && (
                    <button
                      type="button"
                      onClick={()=> setPrompt("")}
                      className="absolute right-14 bottom-4 text-gray-500 hover:text-gray-700"
                      disabled={loading}
                    >      
                       ✕                
                    </button>
                )}
            </div>
            <button
               type="submit"
               className="px-4 py-4 bg-gradient-to-r from-gray-400 to-orange-400 text-shadow-black rounded-lg shadow hover:from-blue-900 disabled:opacity-60 transition-all duration-200 flex items-center justify-center"
               disabled={loading || !prompt.trim()}
            >
             {loading ? (
                <span className="inline-block h-2 w-2 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></span>
             ) : (
                <>
                  <span className="mr-2">Send</span>
                </>
             )}
            </button>
        </form>
   )
}

export default PromptInput;
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeHighlighter = ({node, inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
    <SyntaxHighlighter 
      style={nightOwl} 
      language={match[1]} 
      PreTag="div" 
      {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>

    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
}

export default CodeHighlighter
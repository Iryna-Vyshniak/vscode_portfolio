export const syntaxHighlightComments = (str) => {
    // Safe wrap comments unless already wrapped
    return str.replace(/(\/\/[^\n]*)/g, '<span class="syn-comment">$1</span>')
              .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="syn-comment">$1</span>');
};

export const getCodeForFile = (filename, dataMap) => {
    if (dataMap[filename]) {
        return dataMap[filename];
    }

    return syntaxHighlightComments(`// TODO: Content for ${filename} goes here...

<span class="syn-keyword">export default function</span> <span class="syn-function">Component</span>() { 
  <span class="syn-keyword">return</span> <span class="syn-operator">&lt;</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>${filename} Data<span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>; 
}`);
};

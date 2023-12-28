export default function formatName(firstName, lastName) {

    return (` ${firstName || ''}${''}${lastName ||''}`)
    }
    
    // 這也許不是最簡易的方式，但是較易讀，這是使用ES6的樣板字面值，並且使用name||空值的方式來決定是否顯示，跟React 的 login&&<div>Successful</div>有類似的邏輯

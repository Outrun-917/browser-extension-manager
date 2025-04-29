function Component({ content, index }) {
    let currentIndex = 1

    function handleClick() {
        console.log(index)

        if (currentIndex === index) {
            return
        }

        
    }

    if (index === "1") {
        return <button onClick={handleClick} className="filter-btn active">{content}</button>
    }

    return <button onClick={handleClick} className="filter-btn">{content}</button>
}

export default Component
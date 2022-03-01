const increment =()=> {
    return {
      type: "increment",
      payload : 1
    }
  }
  const decrement = ()=> {
    return {
      type: "decrement",
      payload : 1
    }
  }

export {increment , decrement};
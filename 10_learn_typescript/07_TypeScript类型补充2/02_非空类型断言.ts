// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length)
  // }
  // vue3源码,非空断言，告诉编译messge一定有值 不要报错
  console.log(message!.length)
}

printMessageLength("aaaa")
printMessageLength("hello world")


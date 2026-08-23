class ApiError extends Error{
     constructor(
          statusCode,
          message = "Something went wrong",
          error =[],
          statck =""
          
     ){
          super(message)
          this.statusCode = statusCode
          this.message =message
          this.data =null
          this.success = false
          this.error = error
     }
}
export {ApiError}
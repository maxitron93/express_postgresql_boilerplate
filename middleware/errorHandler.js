// This returns the route handler wraped inside a try-catch block
const asyncTryCatchRouteHandler = (routeHandler) => {
  return async (req, res, next) => {
    try {
      await routeHandler(req, res)
    } catch(error) {
      next(error)
    }
  }
}

// This is what happens when an error occurs. i.e. what happens within 'catch'
const errorHandler = (error, req, res, next) => {
  res.status(500).send('Something went wrong')
}

module.exports = {
  errorHandler,
  asyncTryCatchRouteHandler
}

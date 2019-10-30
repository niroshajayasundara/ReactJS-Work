var req = defineRequest()
receiveRequest(req)

var timer = new DiagnosticTimer(context)
timer.measure(// do work)
timer.measure(// do more work)
var res = buildResponse()
...
sendResponse(req, res)
logRequest(req, res, timer)

def start_app(env, start_response):
    start_response("200 OK", [("Content-Type","text\html")])
    return [b"Started!"]

start = start_app

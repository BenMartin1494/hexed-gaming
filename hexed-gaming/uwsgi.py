def start_app(env, start_response):
    start_response("200 OK", [("Content-Type","text\html")])
    return [b"Is this thing on? Hello?"]

start = start_app

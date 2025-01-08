import requests

url = "http://127.0.0.1:8000/api/posts/1"

headers = {"Authorization": "Token cb7dcbff2aee4fbce1bb55cf1a39751c7d78f3fe"}
r = requests.get(url, headers=headers)
print(r.json())

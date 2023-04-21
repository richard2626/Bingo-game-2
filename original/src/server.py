import asyncio
import json
import websockets

# 名字:websockets
USERS = {}

usernum = 0


async def chat(websocket, path):
    # 握手
    await websocket.send(json.dumps({"type": "handshake"}))

    async for message in websocket:
        data = json.loads(message)
        print(data)
        message = ''
        # 用户发信息
        if data["type"] == 'send':
            name = '404'
            for k, v in USERS.items():
                if v == websocket:
                    name = k
            if len(USERS) != 0:  # asyncio.wait doesn't accept an empty list
                message = json.dumps(
                    {"type": "user", "content": data["content"], "from": name})

        # 用户登录
        elif data["type"] == 'login':
            USERS[data["content"]] = websocket
            usernum = len(USERS)
            print(usernum)
            if len(USERS) != 0:  # asyncio.wait doesn't accept an empty list
                message = json.dumps(
                    {"type": "login", "content": data["content"], "user_list": list(USERS.keys())})

        # 用户退出
        elif data["type"] == 'logout':
            del USERS[data["content"]]
            if len(USERS) != 0:  # asyncio.wait doesn't accept an empty list
                message = json.dumps(
                    {"type": "logout", "content": data["content"], "user_list": list(USERS.keys())})

        # 群发
        await asyncio.wait([user.send(message) for user in USERS.values()])


start_server = websockets.serve(chat, "127.0.0.1", 1234)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

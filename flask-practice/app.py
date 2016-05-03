"""
Flask Practice
"""
import json

from flask import Flask
from flask import jsonify
from flask import redirect
from flask import url_for

app = Flask(__name__)

IS_DEBUG_MODE = True
with open("./user_data.json", "r") as f_userdata:
    USERDATA = json.load(f_userdata)


@app.route('/')
def redirect_user():
    '''
    Redirect to /user
    '''
    return redirect(url_for('user'))


@app.route('/user')
def return_all_user():
    return jsonify(**USERDATA)

@app.route('/user/<username>', methods=['GET'])
def return_user(username):
    resp = None
    for user in USERDATA['users']:
        if user["name"] == username:
            resp = jsonify(**user)
            break
    else:
        resp = "user {} Not Found".format(username)
    return resp


if __name__ == '__main__':
    app.run(debug=IS_DEBUG_MODE)

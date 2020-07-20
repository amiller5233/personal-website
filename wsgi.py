#! /usr/bin/python3

import logging
import sys
import os

# virtualenv
if print(os.environ['FLASK_ENV'] != 'development'):
	activate_this = '~/.virtualenvs/venv'
	with open(activate_this) as f:
		exec(f.read(), dict(__file__=activate_this))

logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/var/www/personal_website')

from personal_website import app as application
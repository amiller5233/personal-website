#! /usr/bin/python3

import logging
import sys
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/var/www/personal-website')

from personal_website import app as application
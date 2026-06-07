release: python backend/manage.py collectstatic --noinput
web: gunicorn dashboard.wsgi --chdir backend
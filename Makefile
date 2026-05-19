run-server:
	cd backend && . venv/bin/activate && python3 manage.py runserver

run-client:
	cd frontend && npm run dev
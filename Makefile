run-server:
	cd backend && source venv/bin/activate && python3 manage.py runserver

run-client:
	cd frontend && npm run dev
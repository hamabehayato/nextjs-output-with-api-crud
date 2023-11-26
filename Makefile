dcb-dev:
	docker-compose build
dcu-dev:
	docker-compose up -d

backend-ssh:
	docker exec -it nodejs-output-first-crud sh
db-ssh:
	docker exec -it  nodejs-output-first-db /bin/bash

# # DB関連
# ## 初期セットアップ
db-migrate:
	docker exec -it nodejs-output-first-crud sh -c "npm run migrate"

db-setup:
	make db-migrate && make db-seed

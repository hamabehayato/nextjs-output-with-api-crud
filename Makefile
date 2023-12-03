dcb-dev:
	docker-compose build
dcu-dev:
	docker-compose up -d


front-ssh:
	docker exec -it nextjs_output_with_crud_frontend sh
backend-ssh:
	docker exec -it nextjs_output_with_crud_backend sh
db-ssh:
	docker exec -it nextjs_output_with_crud_db /bin/bash


# DB関連
# マイグレーション
db-migrate:
	docker exec -it nextjs_output_with_crud_backend sh -c "npm run migrate"
# # シーディング
# db-seed:
# 	docker exec -it nextjs_output_with_crud_backend sh -c "npm run seed"

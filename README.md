- instruções

instale o docker e o docker compose

comando: docker build -t "node da maquina (container)" .

<!-- o ponto é onde esta localizado o docker file  -->

<!-- quando rodar a porta 3000 no navegador, vai chamar a porta 3000 no container  -->
<!-- -d imagem que sta utilizando -->

docker run -p 3000:3000 -d "nome na imagem"

docker-compose up

CONFIGURANDO o MySQL

docker pull mysql  
docker run --name omnistack_saas -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql

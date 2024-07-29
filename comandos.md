history (histórico)

      git version (valida a versão do git)
    
      git config --global user.name "Maria" (cria o usuário do git)
    
      git config --global user.email "mariaeduardabenevenutti77@gmail.com" (cria o email do git - não precisa ser o do github)
    
      git config list (lista as chaves criadas - se existir)
    
      ls -al ~/.ssh (verifica se há chave ssh)
    
      ssh-keygen -t ed25519 -C "mariaeduardabenevenutti77@gmail.com" (atribui uma chave ssh ao email do github)
    
     eval "$(ssh-agent -s)"  (cria um agente ssh)
   
     ssh-add ~/.ssh/id_ed25519 (adiciona a chave ao agente criado)
   
     clip < ~/.ssh/id_ed25519.pub (comando que copia a chave ssh para colar no github)
   
     git clone git@github.com:eduardabenevenutti77/avaliacao-fullstack.git (comando para clonar o repo)
   
     cd avaliacao-fullstack (entra na pasta do repo clonado)
   
     git checkout -b dev (cria uma branch dev) 
   
    nano comando.md (cria um arquivo dentro da branch dev)
   
     git status (valida se há arquivos para commitar)
   
     git add . (adiciona o arquivo)
   
     git commit -m "incluindo branch" (inclui uma mensagem)
   

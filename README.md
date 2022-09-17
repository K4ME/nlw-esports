# Instalações BackEnd:

    npm i typescript -D
    npx tsc --init //criar arquivo tsconfig.json
    npm install express
    npm install @types/express -D
    npm i ts-node-dev -D
    npm i prisma -D
    npx prisma init --datasource-provider SQLite
    npm i @prisma/
    npm i cors
    npm i @types/cors -D

    //comando
    npx prisma migrate dev //cria uma migration
    npx prisma studio //abre uma interface gráfica do banco

# Instalações FrontEnd

    npm create vite@latest //Criar projeto react usando vite

    ## adicionando estilos
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    npm install phosphor-react
    npm install @radix-ui/react-dialog

# Instalações Mobile

    https://docs.expo.dev/get-started/installation/
    instalar o expo no celular
    npm install --global expo-cli
    expo init mobile //criar projeto usando expo

    npx expo install expo-font @expo-google-fonts/inter
    npx expo install react-native-safe-area-context
    npx expo install expo-linear-gradient

    https://reactnavigation.org/ navegação entre tela
    npm install @react-navigation/native
    expo install react-native-screens
    npm install @react-navigation/native-stack
    npm install --save phosphor-react-native
    expo install react-native-svg

# front-with-dbserver

> ⚠️ **Projeto Experimental**  
> Este repositório foi criado exclusivamente para fins de estudo, com base em uma série oficial de vídeos da equipe do Angular no YouTube, ministrada por **Mark Thompson**, membro da Angular Core Team no Google (EUA).

## 📘 Descrição

Este projeto frontend demonstra o uso de **Angular** com foco em:

- Componentes standalone modernos (Angular 15+)
- Consumo de serviços simulados (estilo DBServer)
- Internacionalização com `@ngx-translate/core`
- Manipulação de formulários reativos (`ReactiveFormsModule`)
- Organização modular com múltiplas rotas e componentes reutilizáveis
- Utilização de `LocalStorage` para preferências de idioma

> 💡 Este repositório tem fins educacionais. A arquitetura não segue padrões de produção como feito em outros projetos meus, que seguem boas práticas tanto front quanto back.

---

## 📚 Fonte Oficial

Este projeto foi desenvolvido com base na playlist:

**📺 [Learning Angular - YouTube](https://www.youtube.com/watch?v=UnOwDuliqZA)**  
🎓 Por **Mark Thompson**  
👨‍💻 Angular Core Team – Google | EUA

A playlist aborda os seguintes temas:

- Getting Started
- Components & Directives
- Routing
- Services
- Forms
- HTTP Requests

---

## 🚀 Como executar

```bash
git clone https://github.com/CDSCarlos/homes-app.git
cd homes-app
npm install
json-server --watch db.json --port 3001
npm start

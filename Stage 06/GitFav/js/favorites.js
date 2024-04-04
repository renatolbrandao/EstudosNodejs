import { GithubUser } from "./githubUser.js"

export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    async add(username){
        try{
            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists){
                throw new Error ('Usuário já cadastrado')
            }

            const githubUser = await GithubUser.search(username)

            if(githubUser.login === undefined){
                throw new Error ('Usuário não encontrado')
            }

            this.entries = [githubUser, ...this.entries]
            this.update()
            this.save()
        }catch(error){
            alert(error.message)
        }
    }

    save(){
        localStorage.setItem('@gitfav:', JSON.stringify(this.entries))
    }

    load(){
        this.entries = JSON.parse(localStorage.getItem('@gitfav:')) || []
    }

    delete(user){
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onadd()
    }

    onadd(){
        const addButton = this.root.querySelector('.searchUser button')
        addButton.onclick = () =>{
            const { value } = this.root.querySelector('.searchUser input')

            this.add(value)
        }
    }

    update(){
        this.emptyState()
        this.removeAlltr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () =>{
                const isOk = confirm('Tem certeza que deseja deletar este favorito?')
                if(isOk){
                    this.delete(user)
                }
            }

            this.tbody.append(row)

        })
    }

    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `

            <td class="user">
                <img src="https://github.com/renatolbrandao.png" alt="Imagem de Renato Brandão">
                <a href="https://github.com/renatolbrandao" target="_blank">
                    <p>Renato Brandão</p>
                    <span>/renatolbrandao</span>
                </a>
            </td>
            <td class="repositories">4</td>
            <td class="followers">0</td>
            <td class="action">
                <button class="remove">Remover</button>
            </td>

            `

            return tr
    }

    removeAlltr(){
        this.tbody.querySelectorAll('tr').forEach( (tr) => {
            tr.remove()
        })
    }

    emptyState(){

        if (this.entries.length === 0){
            this.root.querySelector('.div-no-favorites').classList.remove('hide')
        }else{
            this.root.querySelector('.div-no-favorites').classList.add('hide')
        }
    }

}
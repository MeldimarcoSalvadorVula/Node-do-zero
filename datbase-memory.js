import {randomUUID} from 'node:crypto';

export class DatabaseMemory{
    #videos = new Map(); // é um dado que será apenas visto por essa class

    list(search){
       return Array.from( this.#videos.entries()).map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return {id,...data}; // retorna um novo objeto com os dados do video com o id unico
       })

       .filter(video => {
        if(search){
            return video.title.includes(search);
        }
        return true; // caso não seja passado nenhum termo de busca retorna todos os videos  // A função filter() retorna um novo array com todos os elementos que passaram no teste implementado pela função fornecida.  // A função filter() retorna um novo array com todos os elementos que passaram no teste implementado pela função fornecida.  // A função filter() retorna um novo array com todos os elementos que passaram no test
       })


    }

    create(video){
        const videoId = randomUUID(); // é um modulo de blibloteca de node que retorna o id unico não duplicado
        this.#videos.set(videoId, video);
    }

    update(id, video){
        this.#videos.set(id, video);
    }

    delete(id){
        this.#videos.delete(id);
    }
}
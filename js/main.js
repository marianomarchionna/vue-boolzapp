Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            newMessage: '',
            index: 0,
            search: '',
            searchResult: [0, 1, 2, 3],
            activeMessage: null,
            myProfile:{
                    name: 'Mariano Marchionna',
                    avatar: '_io'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods: {
            selectContact(i) {
                this.index = i;
            },
            getData(){
                let now = new Date();
                let dd = String(now.getDate()).padStart(2, '0');
                let mm = String(now.getMonth() + 1).padStart(2, '0');
                let yyyy = now.getFullYear();
                let date = dd + '/' + mm + '/' +yyyy;
                let hours = String(now.getHours()).padStart(2, '0');
                let minutes = String(now.getMinutes()).padStart(2, '0');
                let seconds = String(now.getSeconds()).padStart(2, '0');
                let time = hours + ':' + minutes + ':' + seconds;
                let dateTime = date + ' ' + time;
                return dateTime;
                // let date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            },
            sentMessage(){
                if(this.newMessage){
                    this.contacts[this.index].messages.push({message: this.newMessage, status: 'sent', date: this.getData()});
                    this.receivedMessage();
                }
                this.newMessage="";
            },
            receivedMessage(){
                setTimeout(()=>{
                    this.contacts[this.index].messages.push({message: "Va bene", status: 'received', date: this.getData()});
                },1000);
            },
            searchChat(){
                let nameChat = this.search.toLowerCase();
                this.searchResult=[];
                this.contacts.forEach((contact,index) => {
                    let nameContact = contact.name.toLowerCase();
                    if(nameContact.includes(nameChat)){
                        return this.searchResult.push(index);
                    } else {
                        return this.searchResult;
                    }
                });
            },
            toggleVisibility(i){
                if(this.activeMessage == null)
                    this.activeMessage = i;
                else this.activeMessage = null;
            },
            infoMessage(element){
                let statusMessage;
                if(element.status === 'sent')
                    statusMessage = 'Inviato';
                else statusMessage = 'Ricevuto';
                alert(' DATA E ORA: ' + element.date + ' TESTO: ' + element.message + ' STATO: ' + statusMessage);
            },
            deleteMessage(i) {
                this.contacts[this.index].messages.splice(i, 1);
                this.activeMessage = null;
            },
        }
    }
)
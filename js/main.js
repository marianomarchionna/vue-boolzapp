Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            newMessage: '',
            filter:'',
            index: 0,
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
            selectContact(element, i) {
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
            },
            sentMessage(){
                this.contacts[this.index].messages.push({message: this.newMessage, status: 'sent', date: this.getData()});
                this.newMessage="";
                this.receivedMessage();
            },
            receivedMessage(){
                setTimeout(()=>{
                     this.contacts[this.index].messages.push({message: "Va bene", status: 'received', date: this.getData()});
                },1000);
            }
        }
    }
)
const app = new Vue (
    {
        el : "#root",
        data : {
            arrDoList: [
                {
                    text: "funziona 1",
                    done: true
                },

                {
                    text: "funziona 2",
                    done: true
                },

                {
                    text: "funziona 3",
                    done: false
                },
            ],
            
        },
        methods : {
            removeTodo: function(index) {
                this.arrDoList.splice(index, 1)
            },

            addNewTodo: function() {
                const newTodo = {
                    text: this.addTodoText,
                    done: true
                }
                this.arrDoList.push(newTodo)
                this.addTodoText = ""
            },
        }
    }
    
)
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Message</div>

                    <div class="panel-body">
                        <form action="#" v-on:submit.prevent="send">
                          <div class="form-group">
                            <label for="Users">Select users</label>
                            <input type="text" name="users" value="users" class="form-control">
                          </div>
                          <div class="form-group">
                            <button type="submit" class="btn btn-primary">Send</button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
          send () {
            console.log('SUBMIT')
          }
        }
    }
</script>

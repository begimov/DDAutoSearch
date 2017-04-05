<template>
<div class="panel panel-default">
    <div class="panel-heading">Message</div>
    <div class="panel-body">
        <form action="#" v-on:submit.prevent="send">
            <div class="form-group">
                <label for="Users">Select users</label>
                <input type="text" name="users" id="users" class="form-control">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Send</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { userautocomplete } from '../helpers/autocomplete'
export default {
    mounted() {
      userautocomplete('#users', {
        hitsPerPage: 4,
        displayKey: 'name'
      })
    },
    methods: {
        send() {
            console.log('SUBMIT')
        }
    }
}
</script>

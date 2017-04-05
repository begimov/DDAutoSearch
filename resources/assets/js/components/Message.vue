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
import autocomplete from 'autocomplete.js'
import algolia from 'algoliasearch'

export default {
    mounted() {
        const index = algolia('O8MEW55J9E', '343230ff7c66bd77e98c352ffec8ee8a').initIndex('users')
        autocomplete('#users', {}, {
            source: autocomplete.sources.hits(index, {
                hitsPerPage: 5
            }),
            displayKey: 'name',
            templates: {
                suggestion(suggestion) {
                    return `<span>${suggestion.name}</span>`
                },
                empty: '<div class="aa-empty">No users found</div>'
            }
        })
    },
    methods: {
        send() {
            console.log('SUBMIT')
        }
    }
}
</script>

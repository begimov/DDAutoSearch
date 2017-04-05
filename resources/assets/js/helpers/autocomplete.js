import autocomplete from 'autocomplete.js'
import algolia from 'algoliasearch'

let index = algolia('O8MEW55J9E', '343230ff7c66bd77e98c352ffec8ee8a')

export const userautocomplete = (selector, {hitsPerPage, displayKey}) => {
    index = index.initIndex('users')

    return autocomplete(selector, {}, {
        source: autocomplete.sources.hits(index, {hitsPerPage: hitsPerPage}),
        displayKey: displayKey,
        templates: {
            suggestion(suggestion) {
                return `<span>${suggestion._highlightResult.name.value}</span>`
            },
            empty: '<div class="aa-empty">No users found</div>'
        }
    })
}

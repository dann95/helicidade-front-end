<template>
    <ul id="user-options">
        <li>
            {{ _name }}
        </li>
        <li>
            item2
        </li>
        <li>
            item3
        </li>
        <li>
            item4
        </li>
    </ul>
</template>

<script>
    export default {
        name: "UserOptions",
        computed: {
            _name() {
                return this._user.nome || 'Nome do Usuário'
            },
            _user() {
                return this.$auth.user()
            }
        }
    }
</script>

<style scoped>
    #user-options {
        margin-right:97px;
    }

    #user-options > li:first-child {
        display: block;
        cursor: pointer;
    }

    #user-options > li:first-child:after {
        content:"\f107";
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
    }

    #user-options.open > li:first-child:after {
        content:"\f106";
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
    }

    #user-options > li:not(:first-child) {
        display: none;
    }
</style>
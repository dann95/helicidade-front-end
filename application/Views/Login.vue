<template>
    <div id="login-box">
        <img src="/dist/img/logo.svg" alt="HeliQuality Logo" width="338" height="97" style="margin:0 auto; display: block;">
        <div id="login-box-inputs">
            <div class="form-element form-input form-input-with-icon">
                <input id="login-email-input" class="form-element-field" placeholder="Please fill in your full name" type="input" required/>
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="login-email-input">E-mail</label>
                <i class="form-input-icon fa fa-user"></i>
            </div>
            <div class="form-element form-input form-input-with-icon">
                <input id="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9" class="form-element-field" placeholder="Please fill in your full name" type="input" required/>
                <div class="form-element-bar"></div>
                <label class="form-element-label" for="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">Senha</label>
                <small class="form-element-hint fr" id="login-forget-pswd"><a href="#">Esqueci minha senha</a></small>
                <i class="form-input-icon fa fa-unlock-alt"></i>
            </div>
            <button id="login-button">
                entrar
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    #login-box {
        width: 759px;
        height: 750px;
        background-color:#fff;
        display:block;
        box-shadow: -7.3px 10.8px 12.2px 0.8px rgba(84, 84, 84, 0.39);
        border-radius: 5px;
        padding:80px 113px 0 113px;
        margin:0 auto;
    }

    #login-box-inputs {
        margin-top:160px;
    }

    #login-button {
        width:100%;
        height: 64px;
        background-color: #efc203;
        border-radius: 5px;
        color: #ffffff;
        text-align: center;
        font-size: 28px;
        font-family: Lato;
        font-weight: bold;
        font-variant: small-caps;
        border:none;
        cursor: pointer;
        margin-top:131px;
    }

    #login-button:focus {
        outline: none;
    }

    #login-forget-pswd {
        margin-top:19px !important;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1.1px;
    }

    #login-forget-pswd > a {
        text-decoration: none;
        color: rgba(185, 150, 2, 0.7) !important;
    }

    .form-element.form-input-with-icon > .form-element-label  {
        padding-left: 2.5rem !important;
    }

    .form-element.form-input-with-icon > .form-element-field {
        padding-left: 2.5rem !important;
    }

    .form-input-icon {
        font-size:1.7em;
        position:absolute;
        top:-8px;
        left:0;
        color:#efc203;
    }
</style>
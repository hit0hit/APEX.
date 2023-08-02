APEX_PAGE.GET_URL(p_page => 24, p_items  => 'P24_ID_CATEGORIA', p_values => C.id_categoria) as PAGE_URL
apex_page.get_url(p_page => '5', p_items => 'P5_ID_CLIENTE', p_values => CL.ID_CLIENTE) AS REDIRECT_URL
apex.item('P1_ID_TAREFA_CRON').setValue(id)
apex.submit('START_CRON_TAREFA')
javscrip:apex.confirm("mensagem que aparecerá", "nome do botao");
apex.page.cancelWarnOnUnsavedChanges();
apex.navigation.redirect( someUrl );
apex.navigation.redirect('\u002Fords\u002Ff?p=107 :1::::::');

apex.page.confirm( "Delete Department", 'DELETE' );
apex.page.confirm( "Save Department?", {
    request: "SAVE",
    set: {
        "P1_DEPTNO": 10,
        "P1_EMPNO": 5433
    }

apex_util.set_session_state('GLOBAL_USER_ID_EMPRESA', :ID_EMPRESA);
javascript: apex.item('P57_ID_EMPRESA').setValue('&ID_EMPRESA.');


javascript: apex.item('P57_ID_EMPRESA').setValue('&ID_EMPRESA.');apex.item('P57_ID_RESPONSAVEL').setValue('&ID_RESPONSAVEL.');apex.submit('SET_SESSION');
apex.server.process('PAUSE_CRON_TAREFA',{ dataType : 'json',  x01 : id }, { dataType : 'text' }


apex_util.set_session_state('GLOBAL_USER_ID', v_id_user);
    apex_util.set_session_state('GLOBAL_USER_PERFIL', v_id_perfil);
    apex_util.set_session_state('GLOBAL_USER_PERFIL', v_id_perfil);




javascript: apex.item('P5_ID').setValue('#ID#');apex.server.process('GET_MODAL_URL', {}, {     dataType:'text',     success:function(pUrl) {         eval(pUrl)     } });
///// ajax callback
'GET_MODAL_URL'
htp.p(APEX_UTIL.PREPARE_URL(p_url => 'f?p=' || :APP_ID || ':6:'|| :APP_SESSION
||'::NO::P6_ID_CLIENTE:' || ':P5_ID'));

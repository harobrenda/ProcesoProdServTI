Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"ProduccionServiciosTIRCD","publishDate":"16/02/2018 16:19:34","pages":[{"id":"12530660-3e88-4e39-9525-07af0360c7e1","name":"Provisión RCD As-Is","version":"1.0","author":"bharob","image":"files\\diagrams\\Provision_RCD_As_Is.png","isSubprocessPage":false,"elements":[{"id":"3b801a86-25f0-4536-b192-dabc01339ec9","name":"Provisión RCD","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":105.0}],"radius":0.0,"height":745.5,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"b4f992a8-876b-40a9-8531-051eda4d3cb7","name":"Día 24 - 26 ","elementImage":"files\\bpmnElements\\TimerStart.png","imageBounds":{"points":[{"x":110.57692,"y":577.2002}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerStart"},{"id":"1b8ee646-1547-40eb-89d8-1c99a25436e3","name":"Enviar mensaje  Disponibilidad de RCC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":160.0,"y":562.2002}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Luis Martinez","value":"aea4aa51-4a15-4aef-a750-764a6e3ff97f","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"a7484c0a-3ffa-4ef3-9b67-cec728a925b6","name":"Carga  de RCC en Oracle - 3H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":160.0,"y":306.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Clidford Cueva","value":"2037dab4-8cf6-4d22-a723-41c5dabe0577","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"cba16a5a-fd82-47ea-a1cd-fc4909da43f9","name":"Carga de RCC en SQL- 3H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":160.0,"y":210.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Clidford Cueva","value":"2037dab4-8cf6-4d22-a723-41c5dabe0577","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"8b7e32b9-543d-48ee-a07c-eb6d6d2496e0","name":"1. Cargar RCC  en HC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":160.0,"y":442.6}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Operador SIFSAC","value":"ebd95b63-6946-448e-93e5-2121e6e827dd","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"f95f12b3-7291-42cb-9d74-e61c1aba712e","name":"3 días antes  de fin de mes","elementImage":"files\\bpmnElements\\TimerStart.png","imageBounds":{"points":[{"x":300.0,"y":205.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerStart"},{"id":"476ca7c4-1a16-4e3b-8727-be570ce65e65","name":"Gestión uso de ambiente DESA -0.2 H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":355.0,"y":190.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Américo Albuquerque","value":"23ac7b01-c6be-4e86-b419-82aa13126a77","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"58e57b84-182a-4033-93d9-24f7c963b76e","name":"Aprobar uso de ambiente- 24 H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":430.0,"y":110.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Claudia Vasquez","value":"1b8e6b2d-7596-4a37-a1c5-0af1de629be7","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"51a27fcb-e8e2-4bd6-9e65-920303da63d6","name":"Restaurar backup - ISSAC y Vencidos - 4H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":430.0,"y":444.6}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Operador SIFSAC","value":"ebd95b63-6946-448e-93e5-2121e6e827dd","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"a40d71b7-d046-4556-815f-668e49317daf","name":"Generar archivo provisión de    TC- 12H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":554.0,"y":444.6}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Operador SIFSAC","value":"ebd95b63-6946-448e-93e5-2121e6e827dd","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"c6cb7b89-f39e-4640-a9f7-bc71c8b99b02","name":"Generar Interface\n VENCIDOS - 6H\r\nhdhd","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Duraci&oacute;n: 4 horas</span></p>","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":691.0,"y":225.4}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","performers":[{"name":"Carlos Paz","value":"f8ef7534-125a-4f11-a4a3-ac40583eca57","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"acbc2bf1-fcaa-4226-899d-bc712ff46554","name":"Generar  Interface\n REFINANCIADOS- 8H","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":695.0,"y":323.900024}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","performers":[{"name":"Erwin Fernandez","value":"b008c8cc-4a4e-40ad-83a9-1ef05fb6caea","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"bb18aa2c-e310-43be-931a-5e4cf4590a12","name":"Generar provisión - 2H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":913.0,"y":567.7001}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Luis Martinez","value":"aea4aa51-4a15-4aef-a750-764a6e3ff97f","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"09fb734c-f1a1-478b-90c8-c0991d0c2b56","name":"Gateway","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":938.0,"y":680.1001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"7828b114-37ca-4f3f-9333-753a6b2c867b","name":"Revisar provisión 24H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":990.0,"y":776.2001}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Tatiana Socola","value":"cf63531f-4071-43b4-9a71-1dc169784585","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"75027ad1-9458-4ded-89fe-9d0a492c8f20","name":"¿Aprueba?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1135.0,"y":786.2001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sí","elementType":"SequenceFlow","properties":[]},{"name":"No","elementType":"SequenceFlow","properties":[]}]},{"id":"e3971325-d5a2-4164-8f82-47fcbb727a08","name":"Gateway","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":1095.0,"y":577.7001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","properties":[],"pageElements":[{"name":"Generar provisión - 2H","elementType":"SequenceFlow","properties":[]}]},{"id":"cba8932f-9cc6-4552-908e-5f29c787a339","name":"Revisar provisión - 24H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":990.0,"y":670.1001}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Ronald Guerrero","value":"c30178fe-3cd7-429a-af1a-5e6aa16f3e7d","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"704fb046-799f-42ff-9098-456d10079651","name":"¿Aprueba?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1095.0,"y":680.1001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sí","elementType":"SequenceFlow","properties":[]},{"name":"No","elementType":"SequenceFlow","properties":[]}]},{"id":"205d8723-be36-42ec-96b3-b50f0e4a6e63","name":"Gateway","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1200.0,"y":680.1001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"cb7c5e16-3755-4ef8-9905-96492d8a764e","name":"Orden de Ejecución provisiones ALI y FINMES-RCD 0.2H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1173.0,"y":559.300049}],"radius":0.0,"height":82.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Luis Martinez","value":"aea4aa51-4a15-4aef-a750-764a6e3ff97f","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"eb6c8fe3-d0e4-495d-a980-c2c5284e6813","name":"Obtener  interfaces automáticas RCD - 6H","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1287.5,"y":457.000122}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Operador SIFSAC","value":"ebd95b63-6946-448e-93e5-2121e6e827dd","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"58e01a20-b1e1-4c49-a6fe-2d34372cdaa9","name":"Procesar RCD - 5Dias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1287.5,"y":567.900146}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Luis Martinez","value":"aea4aa51-4a15-4aef-a750-764a6e3ff97f","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"b20a96d3-828a-4357-bad3-bbe79ef29751","name":"Cargar  movimientos adicionales en RCD - 3H ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1395.0,"y":263.9}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","performers":[{"name":"Ronald Guerrero","value":"c30178fe-3cd7-429a-af1a-5e6aa16f3e7d","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"43e90ef5-0846-494f-8ce5-ffabe5c1dda9","name":"Fin","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1500.0,"y":278.9}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"3e663ab2-eb73-490e-ad6e-8b19f21052bb","name":"Seguridad de Información","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":105.0}],"radius":0.0,"height":79.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f36fd9eb-11d0-4a51-a62a-c4a62b6c47f1","name":"Sistemas BF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":184.5}],"radius":0.0,"height":241.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"66eaa4b4-5032-44c8-afc9-1a58208a666d","name":"SIFSAC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":426.0}],"radius":0.0,"height":128.1,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"60dc3433-6954-4f43-96ec-b8f6aaf2dc38","name":"Reportes Normativos","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":554.1}],"radius":0.0,"height":96.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"62e52fd2-dc3e-4ca0-9e02-e4b4428f2b45","name":"Contabilidad","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":650.9}],"radius":0.0,"height":112.1,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a084f89d-ec44-4741-a5d3-d39b57c5a53f","name":"Riesgos","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":763.0}],"radius":0.0,"height":87.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"216b3e33-e63b-41a7-a737-90e97aa89400","name":"Verificar RCD - 1Dia","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1395.0,"y":567.900146}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"20e7cc19-8a22-48d4-adea-095c01649bc3","name":"Validar duplicados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":786.0,"y":775.1}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c6f2adcf-8e98-47b7-9493-8c28eecc30e7","name":"Eliminar Duplicados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":913.0,"y":271.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}]},{"id":"72329c16-3142-4ef7-852f-f873f4f9302f","name":"Calendario","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":80.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[]}],"subPages":[{"id":"c6cb7b89-f39e-4640-a9f7-bc71c8b99b02","name":"Generar Interface\n VENCIDOS - 6H\r\nhdhd","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Duraci&oacute;n: 4 horas</span></p>","image":"files\\diagrams\\Generar_Interface__VENCIDOS___6H__hdhd.png","isSubprocessPage":true,"elements":[{"id":"dba99af8-4cb6-427c-86f4-865af958ff61","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":165.0,"y":20.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e88e88fa-093e-4d46-83e9-5f831e0fdbfc","name":"Verificar duplicados en  BD Vencidos ","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":135.0,"y":70.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"f5e4ce51-c3e9-48ef-9c98-2de612951387","name":"¿Conforme?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":160.0,"y":160.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sí","elementType":"SequenceFlow","properties":[]},{"name":"No","elementType":"SequenceFlow","properties":[]}]},{"id":"f0b8d1fe-8bb7-47c3-9bf9-04a451e28a80","name":"Limpieza de registros duplicados","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":20.0,"y":100.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"f044e3f3-8532-41ee-bb9d-01e5cb09e407","name":"Verificar cuentas migradas de SAT en Vencidos","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":125.0,"y":240.0}],"radius":0.0,"height":60.0,"width":110.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"f90a3cb1-6875-41cc-865b-4ffa950fe1b3","name":"Ejecutar Saldo Insoluto","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":135.0,"y":425.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"f34f6928-f320-4192-8f09-75219b2f806c","name":"Ejecutar Intefaces Vencidos","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":135.0,"y":505.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"7ec5ab69-bef7-4177-bf9a-c5f7a4735bc0","name":"Generación de Reportes Saldo Insoluto","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":135.0,"y":585.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"2b73fcd2-e65f-4af6-a8f8-0a43c5975f9e","name":"Fin","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":165.0,"y":670.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"8d284723-5da1-4e82-a3a0-c218bc58be77","name":"Obtener información de  ODS \n Para validar migración de SAT a Refinanciados de  último día del mes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":75.0,"y":320.0}],"radius":0.0,"height":80.0,"width":210.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}],"parentRef":"12530660-3e88-4e39-9525-07af0360c7e1"},{"id":"acbc2bf1-fcaa-4226-899d-bc712ff46554","name":"Generar  Interface\n REFINANCIADOS- 8H","image":"files\\diagrams\\Generar__Interface__REFINANCIADOS__8H.png","isSubprocessPage":true,"elements":[{"id":"d82359b3-299e-466f-94fa-22a575cfae48","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":300.000122,"y":20.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5019c2a4-f763-4b89-bab1-681513bf6c07","name":"Activity","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":20.0,"y":440.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"cfc392e0-bbeb-4944-a29a-d6b8f49c8f13","name":"Realizar validaciones","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":20.0,"y":615.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"18212027-2a35-460a-ad8c-d582c6ee07fb","name":"Generar Interfaces","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":39.99994,"y":790.0}],"radius":0.0,"height":120.0,"width":250.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"5a9b8282-d7e8-4135-a869-2bb439b0e77f","name":"Fin","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":299.999878,"y":935.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"b03fae77-5bb9-4f06-98ca-70551ffad559","name":"Verificar duplicados en  BD ISSAC ","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":270.000122,"y":75.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"e5218f68-210b-4ebd-b9d7-579546b779ca","name":"¿Conforme?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":295.000122,"y":155.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"No","elementType":"SequenceFlow","properties":[]},{"name":"Sí","elementType":"SequenceFlow","properties":[]}]},{"id":"f4a7204c-11e9-499f-ae32-9200b7199d34","name":"Limpieza de registros duplicados","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":150.000122,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"4a98892b-1bf9-4d09-8202-81bf0cc61858","name":"Verificar cuentas migradas de SAT en ISSAC","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":260.000122,"y":235.0}],"radius":0.0,"height":60.0,"width":110.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"d30bc861-2acc-4af3-bc9a-2b508d278670","name":"Obtener información de  ODS \n Para validar migración de SAT a Refinanciados de  último día del mes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.000122,"y":318.0}],"radius":0.0,"height":80.0,"width":210.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}],"parentRef":"12530660-3e88-4e39-9525-07af0360c7e1"},{"id":"cfc392e0-bbeb-4944-a29a-d6b8f49c8f13","name":"Realizar validaciones","image":"files\\diagrams\\Realizar_validaciones.png","isSubprocessPage":true,"elements":[{"id":"d333ba10-c342-4a91-9646-02135db9eac5","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":20.0,"y":35.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"78a25891-d542-40ab-b827-3eac9701ba75","name":"Validar Saldos RCD","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":85.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"959d15bd-80b5-4924-90a8-923816d3362b","name":"Validar Refinanciados","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":200.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"0ca133bd-2764-40c7-bcdb-f7c740c9d696","name":"Validar SIAP","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":310.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"51eeb861-4c21-4824-9ccc-c4dbd0ee74e1","name":"Validar Reporte14","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":420.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"c468c374-7078-491b-b50c-7bd95e611b2f","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":540.0,"y":35.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"}],"parentRef":"acbc2bf1-fcaa-4226-899d-bc712ff46554"},{"id":"5019c2a4-f763-4b89-bab1-681513bf6c07","name":"Sub-Process","image":"files\\diagrams\\5019c2a4_f763_4b89_bab1_681513bf6c07.png","isSubprocessPage":true,"elements":[{"id":"e68b95fa-2c63-472e-becd-e9bc7adfd34a","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":20.0,"y":35.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"1b454560-784d-4126-ad7b-bb02f067241e","name":"Generar SIAP","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":95.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"a91ec237-fbe0-4064-aac7-725033cced85","name":"Generar Archivos RCD","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":200.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"8f6df205-91f5-40f0-9574-e9e853b2d95b","name":"Generar Reporte14","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":310.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"11a3657b-d799-457e-9ce9-72e29602a9bf","name":"Generar Colocaciones","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":420.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"61e9b22d-ca08-4dbf-87e3-607e8eb56645","name":"Generar Reporte Saldo Capital","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":530.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"c36c94b1-9321-45bd-9a78-c6cc8685e42a","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":650.0,"y":35.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"}],"parentRef":"acbc2bf1-fcaa-4226-899d-bc712ff46554"},{"id":"18212027-2a35-460a-ad8c-d582c6ee07fb","name":"Generar Interfaces","image":"files\\diagrams\\Generar_Interfaces.png","isSubprocessPage":true,"elements":[{"id":"13a65267-a8f5-40b4-9da9-265a089a5dd8","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":20.0,"y":35.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5c3a4bff-21ff-4e1e-9810-bc041a45a49c","name":"Generar SIAP","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":69.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"de32246b-1c68-4468-8f3a-13afce85b3ac","name":"Generar RCD","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":180.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"0df3cae9-9b68-4640-9b03-1dfe0a6547a0","name":"Generar Reporte14","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":290.0,"y":20.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"8f95c39e-9bc5-416e-9a01-4aa8de2de89a","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":404.0,"y":35.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"}],"parentRef":"acbc2bf1-fcaa-4226-899d-bc712ff46554"}]},{"id":"3234bcbf-3fa1-422b-b4ca-7598238d65db","name":"Contabilidad","version":"1.0","author":"bharob","image":"files\\diagrams\\Contabilidad.png","isSubprocessPage":false,"elements":[{"id":"b1874ac4-2366-4121-8818-82a4925ee4c9","name":"Contabilidad - Cierre Mes","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":25.0,"y":100.0}],"radius":0.0,"height":254.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"50ab9f29-40f3-4b1c-9c28-47945db514a6","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":115.0,"y":135.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5ee6c21b-242e-45f5-a662-44dd5c066f15","name":"1.Carga de Interfaces Contables","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":165.0,"y":120.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"856adc70-f8ed-48f0-8b34-7a2abfa9fc78","name":"2.Capitalización de Intereses","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":275.0,"y":120.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"850cc04e-d969-4451-87c1-2d8924ece5fc","name":"3.Stock de Pasivos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":390.0,"y":120.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"05764439-512d-45ae-b6cc-ff077817cb7e","name":"4.Reportes CSV Contables","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":505.0,"y":120.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"44f20450-24e0-41d3-9593-bd73965d2b63","name":"5.Entrega Interfaz Contable","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":625.0,"y":120.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6c009dc8-a1e8-4789-991a-ed278794b748","name":"6.Carga Intrefaz Contable","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":745.0,"y":240.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"746ae9a4-dc8f-4dc9-8f92-40e65a1fc0c1","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":865.0,"y":255.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"d80dee98-5d3b-4065-95a9-2c9a0c02275a","name":"Sistemas","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":75.0,"y":100.0}],"radius":0.0,"height":136.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7127f096-e207-4757-9345-9069edc8fcea","name":"Contabilidad","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":75.0,"y":236.0}],"radius":0.0,"height":118.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"resourcePage":{"id":"Resources","name":"Resources","isSubprocessPage":false,"elements":[{"id":"f8ef7534-125a-4f11-a4a3-ac40583eca57","name":"Carlos Paz","rol":"Role"},{"id":"b008c8cc-4a4e-40ad-83a9-1ef05fb6caea","name":"Erwin Fernandez","rol":"Role"},{"id":"2037dab4-8cf6-4d22-a723-41c5dabe0577","name":"Clidford Cueva","description":"Datawarehouse","rol":"Role"},{"id":"aea4aa51-4a15-4aef-a750-764a6e3ff97f","name":"Luis Martinez","rol":"Role"},{"id":"ebd95b63-6946-448e-93e5-2121e6e827dd","name":"Operador SIFSAC","rol":"Role"},{"id":"23ac7b01-c6be-4e86-b419-82aa13126a77","name":"Américo Albuquerque","rol":"Role"},{"id":"1b8e6b2d-7596-4a37-a1c5-0af1de629be7","name":"Claudia Vasquez","rol":"Role"},{"id":"c30178fe-3cd7-429a-af1a-5e6aa16f3e7d","name":"Ronald Guerrero","rol":"Role"},{"id":"cf63531f-4071-43b4-9a71-1dc169784585","name":"Tatiana Socola","rol":"Role"}]},"searchMap":[{"containerId":"12530660-3e88-4e39-9525-07af0360c7e1","containerName":"Provisión RCD As-Is","isSubprocess":false,"elements":[{"id":"3b801a86-25f0-4536-b192-dabc01339ec9","value":"Provisión RCD"},{"id":"3e663ab2-eb73-490e-ad6e-8b19f21052bb","value":"Seguridad de Información"},{"id":"f36fd9eb-11d0-4a51-a62a-c4a62b6c47f1","value":"Sistemas BF"},{"id":"66eaa4b4-5032-44c8-afc9-1a58208a666d","value":"SIFSAC"},{"id":"60dc3433-6954-4f43-96ec-b8f6aaf2dc38","value":"Reportes Normativos"},{"id":"62e52fd2-dc3e-4ca0-9e02-e4b4428f2b45","value":"Contabilidad"},{"id":"a084f89d-ec44-4741-a5d3-d39b57c5a53f","value":"Riesgos"},{"id":"bb18aa2c-e310-43be-931a-5e4cf4590a12","value":"Generar provisión - 2H"},{"id":"cba8932f-9cc6-4552-908e-5f29c787a339","value":"Revisar provisión - 24H"},{"id":"7828b114-37ca-4f3f-9333-753a6b2c867b","value":"Revisar provisión 24H"},{"id":"cb7c5e16-3755-4ef8-9905-96492d8a764e","value":"Orden de Ejecución provisiones ALI y FINMES-RCD 0.2H"},{"id":"eb6c8fe3-d0e4-495d-a980-c2c5284e6813","value":"Obtener  interfaces automáticas RCD - 6H"},{"id":"b20a96d3-828a-4357-bad3-bbe79ef29751","value":"Cargar  movimientos adicionales en RCD - 3H "},{"id":"43e90ef5-0846-494f-8ce5-ffabe5c1dda9","value":"Fin"},{"id":"58e01a20-b1e1-4c49-a6fe-2d34372cdaa9","value":"Procesar RCD - 5Dias"},{"id":"c6cb7b89-f39e-4640-a9f7-bc71c8b99b02","value":"Generar Interface\n VENCIDOS - 6H\r\nhdhd"},{"id":"acbc2bf1-fcaa-4226-899d-bc712ff46554","value":"Generar  Interface\n REFINANCIADOS- 8H"},{"id":"205d8723-be36-42ec-96b3-b50f0e4a6e63","value":""},{"id":"704fb046-799f-42ff-9098-456d10079651","value":"¿Aprueba?"},{"id":"75027ad1-9458-4ded-89fe-9d0a492c8f20","value":"¿Aprueba?"},{"id":"e3971325-d5a2-4164-8f82-47fcbb727a08","value":""},{"id":"8b7e32b9-543d-48ee-a07c-eb6d6d2496e0","value":"1. Cargar RCC  en HC"},{"id":"cba16a5a-fd82-47ea-a1cd-fc4909da43f9","value":"Carga de RCC en SQL- 3H"},{"id":"a7484c0a-3ffa-4ef3-9b67-cec728a925b6","value":"Carga  de RCC en Oracle - 3H"},{"id":"f95f12b3-7291-42cb-9d74-e61c1aba712e","value":"3 días antes  de fin de mes"},{"id":"09fb734c-f1a1-478b-90c8-c0991d0c2b56","value":""},{"id":"1b8ee646-1547-40eb-89d8-1c99a25436e3","value":"Enviar mensaje  Disponibilidad de RCC"},{"id":"476ca7c4-1a16-4e3b-8727-be570ce65e65","value":"Gestión uso de ambiente DESA -0.2 H"},{"id":"58e57b84-182a-4033-93d9-24f7c963b76e","value":"Aprobar uso de ambiente- 24 H"},{"id":"51a27fcb-e8e2-4bd6-9e65-920303da63d6","value":"Restaurar backup - ISSAC y Vencidos - 4H"},{"id":"b4f992a8-876b-40a9-8531-051eda4d3cb7","value":"Día 24 - 26 "},{"id":"216b3e33-e63b-41a7-a737-90e97aa89400","value":"Verificar RCD - 1Dia"},{"id":"a40d71b7-d046-4556-815f-668e49317daf","value":"Generar archivo provisión de    TC- 12H"},{"id":"20e7cc19-8a22-48d4-adea-095c01649bc3","value":"Validar duplicados"},{"id":"c6f2adcf-8e98-47b7-9493-8c28eecc30e7","value":"Eliminar Duplicados"},{"id":"72329c16-3142-4ef7-852f-f873f4f9302f","value":"Calendario"},{"id":"ca7e7119-84da-44d7-a987-026c14c22009"},{"id":"8a75f296-58a4-470d-9e51-1939c65d8847"}]},{"containerId":"c6cb7b89-f39e-4640-a9f7-bc71c8b99b02","containerName":"Generar Interface\n VENCIDOS - 6H\r\nhdhd","isSubprocess":true,"elements":[{"id":"dba99af8-4cb6-427c-86f4-865af958ff61","value":""},{"id":"f5e4ce51-c3e9-48ef-9c98-2de612951387","value":"¿Conforme?"},{"id":"2b73fcd2-e65f-4af6-a8f8-0a43c5975f9e","value":"Fin"},{"id":"e88e88fa-093e-4d46-83e9-5f831e0fdbfc","value":"Verificar duplicados en  BD Vencidos "},{"id":"f0b8d1fe-8bb7-47c3-9bf9-04a451e28a80","value":"Limpieza de registros duplicados"},{"id":"f044e3f3-8532-41ee-bb9d-01e5cb09e407","value":"Verificar cuentas migradas de SAT en Vencidos"},{"id":"f90a3cb1-6875-41cc-865b-4ffa950fe1b3","value":"Ejecutar Saldo Insoluto"},{"id":"f34f6928-f320-4192-8f09-75219b2f806c","value":"Ejecutar Intefaces Vencidos"},{"id":"7ec5ab69-bef7-4177-bf9a-c5f7a4735bc0","value":"Generación de Reportes Saldo Insoluto"},{"id":"8d284723-5da1-4e82-a3a0-c218bc58be77","value":"Obtener información de  ODS \n Para validar migración de SAT a Refinanciados de  último día del mes"}]},{"containerId":"acbc2bf1-fcaa-4226-899d-bc712ff46554","containerName":"Generar  Interface\n REFINANCIADOS- 8H","isSubprocess":true,"elements":[{"id":"d82359b3-299e-466f-94fa-22a575cfae48","value":""},{"id":"5a9b8282-d7e8-4135-a869-2bb439b0e77f","value":"Fin"},{"id":"cfc392e0-bbeb-4944-a29a-d6b8f49c8f13","value":"Realizar validaciones"},{"id":"5019c2a4-f763-4b89-bab1-681513bf6c07","value":""},{"id":"18212027-2a35-460a-ad8c-d582c6ee07fb","value":"Generar Interfaces"},{"id":"b03fae77-5bb9-4f06-98ca-70551ffad559","value":"Verificar duplicados en  BD ISSAC "},{"id":"4a98892b-1bf9-4d09-8202-81bf0cc61858","value":"Verificar cuentas migradas de SAT en ISSAC"},{"id":"f4a7204c-11e9-499f-ae32-9200b7199d34","value":"Limpieza de registros duplicados"},{"id":"e5218f68-210b-4ebd-b9d7-579546b779ca","value":"¿Conforme?"},{"id":"d30bc861-2acc-4af3-bc9a-2b508d278670","value":"Obtener información de  ODS \n Para validar migración de SAT a Refinanciados de  último día del mes"}]},{"containerId":"cfc392e0-bbeb-4944-a29a-d6b8f49c8f13","containerName":"Realizar validaciones","isSubprocess":true,"elements":[{"id":"51eeb861-4c21-4824-9ccc-c4dbd0ee74e1","value":"Validar Reporte14"},{"id":"78a25891-d542-40ab-b827-3eac9701ba75","value":"Validar Saldos RCD"},{"id":"d333ba10-c342-4a91-9646-02135db9eac5","value":""},{"id":"959d15bd-80b5-4924-90a8-923816d3362b","value":"Validar Refinanciados"},{"id":"0ca133bd-2764-40c7-bcdb-f7c740c9d696","value":"Validar SIAP"},{"id":"c468c374-7078-491b-b50c-7bd95e611b2f","value":""}]},{"containerId":"5019c2a4-f763-4b89-bab1-681513bf6c07","containerName":"","isSubprocess":true,"elements":[{"id":"e68b95fa-2c63-472e-becd-e9bc7adfd34a","value":""},{"id":"c36c94b1-9321-45bd-9a78-c6cc8685e42a","value":""},{"id":"1b454560-784d-4126-ad7b-bb02f067241e","value":"Generar SIAP"},{"id":"a91ec237-fbe0-4064-aac7-725033cced85","value":"Generar Archivos RCD"},{"id":"8f6df205-91f5-40f0-9574-e9e853b2d95b","value":"Generar Reporte14"},{"id":"11a3657b-d799-457e-9ce9-72e29602a9bf","value":"Generar Colocaciones"},{"id":"61e9b22d-ca08-4dbf-87e3-607e8eb56645","value":"Generar Reporte Saldo Capital"}]},{"containerId":"18212027-2a35-460a-ad8c-d582c6ee07fb","containerName":"Generar Interfaces","isSubprocess":true,"elements":[{"id":"de32246b-1c68-4468-8f3a-13afce85b3ac","value":"Generar RCD"},{"id":"5c3a4bff-21ff-4e1e-9810-bc041a45a49c","value":"Generar SIAP"},{"id":"13a65267-a8f5-40b4-9da9-265a089a5dd8","value":""},{"id":"0df3cae9-9b68-4640-9b03-1dfe0a6547a0","value":"Generar Reporte14"},{"id":"8f95c39e-9bc5-416e-9a01-4aa8de2de89a","value":""}]},{"containerId":"3234bcbf-3fa1-422b-b4ca-7598238d65db","containerName":"Contabilidad","isSubprocess":false,"elements":[{"id":"b1874ac4-2366-4121-8818-82a4925ee4c9","value":"Contabilidad - Cierre Mes"},{"id":"d80dee98-5d3b-4065-95a9-2c9a0c02275a","value":"Sistemas"},{"id":"7127f096-e207-4757-9345-9069edc8fcea","value":"Contabilidad"},{"id":"746ae9a4-dc8f-4dc9-8f92-40e65a1fc0c1","value":""},{"id":"6c009dc8-a1e8-4789-991a-ed278794b748","value":"6.Carga Intrefaz Contable"},{"id":"5ee6c21b-242e-45f5-a662-44dd5c066f15","value":"1.Carga de Interfaces Contables"},{"id":"50ab9f29-40f3-4b1c-9c28-47945db514a6","value":""},{"id":"856adc70-f8ed-48f0-8b34-7a2abfa9fc78","value":"2.Capitalización de Intereses"},{"id":"850cc04e-d969-4451-87c1-2d8924ece5fc","value":"3.Stock de Pasivos"},{"id":"05764439-512d-45ae-b6cc-ff077817cb7e","value":"4.Reportes CSV Contables"},{"id":"44f20450-24e0-41d3-9593-bd73965d2b63","value":"5.Entrega Interfaz Contable"},{"id":"f1b77759-485a-4a81-a4ed-ec94333798ae","value":"Calendario"},{"id":"a4a05517-cea8-4671-bb40-c72fe6a56f12"}]}]}
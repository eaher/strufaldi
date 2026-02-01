<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $nombre = strip_tags(trim($_POST["nombre"]));
    $apellido = strip_tags(trim($_POST["apellido"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags(trim($_POST["telefono"]));
    $ciudad = strip_tags(trim($_POST["ciudad"]));
    $provincia = strip_tags(trim($_POST["provincia"]));
    $mensaje = trim($_POST["mensaje"]);
    $tipoUsuario = isset($_POST["user_type"]) ? $_POST["user_type"] : "No especificado";
    $contactoPreferido = isset($_POST["contacto_preferido"]) ? $_POST["contacto_preferido"] : "No especificado";

    // Validar datos requeridos
    if (empty($nombre) || empty($apellido) || empty($mensaje) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor complete todos los campos y use un email válido.";
        exit;
    }

    // Configurar correo
    $recipient = "ventas@ceracor.com.ar"; // Cambiar al email real de destino
    $subject = "Nuevo contacto desde la web ($tipoUsuario)";

    $email_content = "Nombre: $nombre $apellido\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Teléfono: $telefono\n";
    $email_content .= "Ciudad: $ciudad\n";
    $email_content .= "Provincia: $provincia\n";
    $email_content .= "Tipo de Usuario: $tipoUsuario\n";
    $email_content .= "Preferencia de contacto: $contactoPreferido\n\n";
    $email_content .= "Mensaje:\n$mensaje\n";

    $email_headers = "From: $nombre <$email>";

    // Enviar correo
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        // Redireccionar a una página de agradecimiento o volver al home con un parámetro de éxito
        echo "<script>alert('Mensaje enviado con éxito.'); window.location.href='index.html';</script>";
    } else {
        http_response_code(500);
        echo "Hubo un problema al enviar su mensaje. Por favor intente nuevamente.";
    }
} else {
    http_response_code(403);
    echo "Hubo un problema con su envío, por favor intente nuevamente.";
}
?>

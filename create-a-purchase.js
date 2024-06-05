/**
 * CHIP-IN-ASIA Create a Purchase information API
 * Why I created this file : Because I need to replicate the code in several application. And I'm super lazy to write it again. So I just create this list.
 * Plus, It more readable than code in POSTMAN API Platform
 * 
 * For more information, please read at their own official API Documentation website
 * @link https://docs.chip-in.asia/chip-collect/api-reference/purchases/create 
*/


{
    "client" : {
        "bank_account" : "",
        "bank_code" : "",
        "email" : "",
        "phone" : "",
        "full_name" : "",
        "personal_code" : "",
        "street_address" : "",
        "country" : "",
        "city" : "",
        "zip_code" : "",
        "state" : "",
        "shipping_street_address" : "",
        "shipping_country" : "",
        "shipping_city" : "",
        "shipping_zip_code" : "",
        "shipping_state" : "",
        "cc" : "",
        "bcc" : "",
        "legal_name" : "",
        "brand_name" : "",
        "registration_number" : "",
        "tax_number" : ""
    },
    
    "purchase" : {
        "currency" : "",
        "products" : {
            "name" : "",
            "quantity" : "",
            "price" : "",
            "discount" : "",
            "tax_percent" : "",
            "category" : ""
        },
        
        "language" : "",
        "notes" : "",
        "debt" : "",
        "subtotal_override" : "",
        "total_tax_override" : "",
        "total_discount_override" : "",
        "total_override" : "",
        "request_client_details" : "",
        "timezone" : "",
        "due_strict" : ""
    },
    
    "brand_id" : "",
    "client_id" : "",
    "send_receipt" : true,
    "skip_capture" : false,
    "force_recurring" : false,
    "reference" : "",
    "issued" : "",
    "due" : "",
    "payment_method_whitelist" : "visa",
    "success_redirect" : "",
    "failure_redirect" : "",
    "cancel_redirect" : "",
    "success_callback" : "",
    "creator_agent" : "",
    "platform" : "web"
}

<?php
declare(strict_types=1);


// Your Service Class

class ChipService
{
    use Client;

    /**
     * Send to CHIP the information
     */
    public function createPurchase(string $bearerToken, string $endpoint, array $data): Response|RedirectResponse
    {
        $response = Http::withToken($bearerToken)
            ->post($endpoint, $data);

        if ($response->failed()) {
            return back()->withErrors(['error' => 'Checkout URL failed']);
        }

        return $response;
    }

    public function redirectToChipPaymentInterface($responseFromChip, $responseCheckoutURL): RedirectResponse
    {
        $responseData = $responseFromChip->json();
        $checkoutURL = $responseData[$responseCheckoutURL];

        return redirect()->away($checkoutURL);
    }
}

//  Your Business Logic
public function purchase(Request $request, ChipService $chip)
    {
        // Initialize Chip Information
        $bearerToken = '';  
        $endpoint = '';
        $brandID = '';

        // Store every data coming from the form in Variable
        $chipInformation = [
            'client' => [
               // ....
            ],
            'purchase' => [
               //...
            ],
            'brand_id' => '',
        ];

        // Send the data to CHIP to analyze
        $response = $chip->createPurchase($bearerToken, $endpoint, $chipInformation);

        // Then redirect to CHIP
        return $chip->redirectToChipPaymentInterface($response, 'checkout_url');
    }

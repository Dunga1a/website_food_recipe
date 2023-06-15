<template>
    <footer class="footer">
        <div class="wrapper wrapper-footer">
            <div class="footer-container">
                <div class="left-footer footer-widget-area"></div>
                <div class="middle-footer footer-widget-area"></div>
                <div class="right-footer footer-widget-area"></div>
            </div>
            <div class="footer-copy">
                <p>
                    “We are a participant in the Amazon.com Services LLC
                    Associates Program, an affiliate advertising program
                    designed to provide a means for us to earn fees by linking
                    to Amazon.com and affiliated sites.” <br /><br />
                    Keto In Pearls Copyright 2017-2021 | All content and photos
                    are original and protected under the DMCA act. Reproducing
                    or replicating content is strictly prohibited.
                    <a href="https://ketoinpearls.com/privacy-policy/"
                        >Privacy Policy</a
                    >
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style>
.footer {
    color: #555;
    text-align: center;
    width: auto;
    font-size: 1.125rem;
}

.footer-container {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.footer-copy {
    width: auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
    font-size: var(--mv-trellis-font-size-sm, 1rem);
    max-width: 80%;
    letter-spacing: 0.05em;
}

.footer p {
    font-size: 15px !important;
    margin-bottom: 20px;
}
</style>

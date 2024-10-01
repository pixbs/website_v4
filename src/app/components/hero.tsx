export default function Hero() {
    return (
        <section>
            <div className="hero mx-tile py-tile gap-half border-foreground border-b">
                <h1>
                    Hey, Im Dimm! 
                    <span className="opacity-60"> Software Engineer </span>
                    and 
                    <span className="opacity-60"> Product Designer</span>
                </h1>
                <p className="min-h-tile">
                I focus on future-oriented methodologies such as human-centricity, and lean development.
                </p>
                <button className="bg-foreground text-background rounded-full h-tile w-full uppercase">
                    <span>Let&apos;s talk</span>
                </button>
            </div>
        </section>
    )
}
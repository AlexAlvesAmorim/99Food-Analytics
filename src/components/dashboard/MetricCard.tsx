type MetricCardProps = {
    title: string;
    value: string;
};

export function MetricCard ({
    title,
    value,
}: MetricCardProps) {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-sm text-gray-500">
                {title}
            </h3>
            <p className="text-3xl font-bold mt-2">
                {value}
            </p>
        </div>
    );
}
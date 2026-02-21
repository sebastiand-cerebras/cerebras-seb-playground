#!/usr/bin/env python3

from datetime import datetime, date


def calculate_safe_mileage():
    """
    Calculate what your mileage should be today to stay on track
    for a 10,000 mile annual allowance by December 31, 2026.
    """

    annual_allowance = 10000
    year = 2026
    start_date = date(year, 1, 1)
    end_date = date(year, 12, 31)
    today = date.today()

    total_days = (end_date - start_date).days + 1
    days_elapsed = (today - start_date).days + 1
    days_remaining = (end_date - today).days

    safe_mileage_today = round((annual_allowance / total_days) * days_elapsed, 1)
    daily_average = round(annual_allowance / total_days, 1)
    remaining_allowance = round(annual_allowance - safe_mileage_today, 1)
    remaining_daily_limit = round(
        remaining_allowance / days_remaining if days_remaining > 0 else 0, 1
    )

    print(f"\n📊 Mileage Calculator for {year}")
    print(f"{'=' * 40}")
    print(f"Annual Allowance: {annual_allowance:,} miles")
    print(f"\n📅 Date Information:")
    print(f"  Today: {today.strftime('%B %d, %Y')}")
    print(
        f"  Period: {start_date.strftime('%B %d')} - {end_date.strftime('%B %d, %Y')}"
    )
    print(f"  Total Days: {total_days}")
    print(f"  Days Elapsed: {days_elapsed}")
    print(f"  Days Remaining: {days_remaining}")
    print(f"\n🚗 Safe Mileage Targets:")
    print(f"  Your mileage SHOULD be today: {safe_mileage_today:,} miles")
    print(f"  Daily Average: {daily_average:,} miles/day")
    print(f"  Remaining Allowance: {remaining_allowance:,} miles")
    print(f"  Daily Limit for rest of year: {remaining_daily_limit:,} miles/day")
    print(
        f"\n📈 If you're over {safe_mileage_today:,} miles today, you're ahead of pace"
    )
    print(
        f"   If you're under {safe_mileage_today:,} miles today, you're behind pace\n"
    )


if __name__ == "__main__":
    calculate_safe_mileage()
